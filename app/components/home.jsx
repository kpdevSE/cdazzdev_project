import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        <Link href={"/sigin"}>
          <li>Register</li>
        </Link>
      </ul>
    </div>
  );
}
