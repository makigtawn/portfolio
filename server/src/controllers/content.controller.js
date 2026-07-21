import { SiteContent } from "../models/SiteContent.js";

async function getSingleton() {
  let doc = await SiteContent.findOne();
  if (!doc) doc = await SiteContent.create({});
  return doc;
}

export async function getContent(req, res, next) {
  try {
    const doc = await getSingleton();
    res.json({ content: doc });
  } catch (err) {
    next(err);
  }
}

export async function updateHero(req, res, next) {
  try {
    const doc = await getSingleton();
    doc.hero = { ...doc.hero.toObject(), ...req.body };
    await doc.save();
    res.json({ content: doc });
  } catch (err) {
    next(err);
  }
}

export async function updateAbout(req, res, next) {
  try {
    const doc = await getSingleton();
    doc.about = { ...doc.about.toObject(), ...req.body };
    await doc.save();
    res.json({ content: doc });
  } catch (err) {
    next(err);
  }
}

export async function updateSkills(req, res, next) {
  try {
    const doc = await getSingleton();
    doc.skills = req.body.skills || [];
    await doc.save();
    res.json({ content: doc });
  } catch (err) {
    next(err);
  }
}
