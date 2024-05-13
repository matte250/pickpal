import { login } from "./actions";

export default function LoginPage() {
    return (
      <form>
        <button formAction={login}>Login as guest</button>
      </form>
    )
  }