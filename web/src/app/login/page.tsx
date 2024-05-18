import { login } from "./actions";

export default function LoginPage() {
    return (
      <main className="cell">
        <form className="cell justify-center items-center">
          <button formAction={login}>Login as guest</button>
        </form>
      </main>
    )
  }