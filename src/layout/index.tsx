import { Flex } from "antd"
import SMKN13LOGO from "../assets/smkn13-logo.png"
import { ReactNode } from "react"

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <Flex
      vertical
      align="center"
      justify="center"
      gap={72}
      className="h-screen"
    >
      <Flex vertical align="center" justify="center" gap={4}>
        <img src={SMKN13LOGO} alt="Logo SMKN 13 Bandung" className="w-24" />
        <Flex vertical align="center" justify="center">
          <h1 className="text-center text-2xl font-bold">
            Pengumuman Kelulusan
          </h1>
          <h2 className="text-center text-lg font-bold text-primary">
            SMKN 13 BANDUNG
          </h2>
        </Flex>
      </Flex>
      {children}
      <Flex vertical align="center" justify="center">
        <p className="text-xs">
          &copy; {new Date().getFullYear()} | SMKN 13 Bandung
        </p>
        <p>
          <a className="text-xs" href="https://instagram.com/taufiksmail_">
            Taufik Ismail
          </a>
        </p>
      </Flex>
    </Flex>
  )
}
