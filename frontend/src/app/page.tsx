import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>Home</div>
      <Link href={'/test'}>
        <div>테스트 페이지</div>
      </Link>
    </>
  );
}
