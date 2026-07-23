import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/Button";
import { authClient } from "@/lib/authClient";

export const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      const { error: signInError } = await authClient.signIn.email({ email, password });
      if (signInError) {
        setError(signInError.message || "Invalid email or password.");
        return;
      }
      navigate("/admin", { replace: true });
    } finally {
      setSubmitting(false);
    }
  };

  const handleGithubSignIn = async () => {
    setError("");
    const { error: signInError } = await authClient.signIn.social({
      provider: "github",
      callbackURL: "/admin",
    });
    if (signInError) {
      setError(signInError.message || "GitHub sign-in isn't configured.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="glass-strong w-full max-w-sm p-8 space-y-6">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold">Admin login</h1>
          <p className="text-sm text-muted-foreground">
            Sign in to manage the portfolio.
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-surface border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-surface border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            />
          </div>

          {error && (
            <p className="text-sm text-red-500" role="alert">
              {error}
            </p>
          )}

          <Button type="submit" className="w-full" disabled={submitting}>
            {submitting ? "Signing in..." : "Sign in"}
          </Button>
        </form>

        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs text-muted-foreground">or</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <Button type="button" variant="ghost" className="w-full" onClick={handleGithubSignIn}>
          <FaGithub className="h-4 w-4 mr-2" />
          Sign in with GitHub
        </Button>
      </div>
    </div>
  );
};
