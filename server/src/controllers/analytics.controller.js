import { PageView } from "../models/PageView.js";

// Buckets pageviews into hourly counts over the requested window, for the
// dashboard's initial chart render (live updates arrive over the socket
// after that).
export async function getPageviewHistory(req, res, next) {
  try {
    const hours = Math.min(Math.max(Number(req.query.hours) || 24, 1), 168);
    const since = new Date(Date.now() - hours * 60 * 60 * 1000);

    const buckets = await PageView.aggregate([
      { $match: { createdAt: { $gte: since } } },
      {
        $group: {
          _id: {
            $dateTrunc: { date: "$createdAt", unit: "hour" },
          },
          count: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } },
    ]);

    res.json({
      buckets: buckets.map((b) => ({ time: b._id, count: b.count })),
    });
  } catch (err) {
    next(err);
  }
}
