const REQUEST_TIMEOUT_MS = 8000;

export async function sendContactMessage({ name, email, message }) {
  const controller = new AbortController();
  const timeoutId = window.setTimeout(
    () => controller.abort(),
    REQUEST_TIMEOUT_MS,
  );

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ name, email, message }),
      signal: controller.signal,
    });

    const data = await response.json().catch(() => null);

    if (response.ok && data?.success) {
      return { success: true };
    }

    const serverMessage = data?.error;
    if (response.status === 503) {
      throw new Error(
        "The contact form is not set up yet. Please try again later.",
      );
    }

    throw new Error(serverMessage || "Could not send your message.");
  } catch (error) {
    if (error.name === "AbortError") {
      throw new Error("Sending took too long. Please try again.", {
        cause: error,
      });
    }

    if (error instanceof TypeError) {
      throw new Error(
        "Could not reach the server. If you're running locally, restart the dev server after adding your Gmail credentials.",
        { cause: error },
      );
    }

    throw error;
  } finally {
    window.clearTimeout(timeoutId);
  }
}
