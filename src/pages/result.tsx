import { Flex, Spin } from "antd"
import AppLayout from "../layout"
import { useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { LoadingOutlined } from "@ant-design/icons"

const BASE_URL =
  "https://script.googleusercontent.com/macros/echo?user_content_key=O7GBvZGs0TwwOcVN1c67FHGlTz9xlwUOy2L3pkiBvfyg6aab6L-glW7vrli3zwIJUs2J0sYU8RMLUGK-9lESunfFVDB-WDVlm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNPt1mq_feux6lE6ttEWonvQaAFp2I_kU9DCqDWy16aHCFb0rhoMBVdhT7Wx3iMM0c1F3ghpfVnUhrEn16bW83Ps3wzw_I-HZtz9Jw9Md8uu&lib=MTxoSJ9jptMtVDhn2xyuwPPE86U4EHG6I"

export default function Result() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [userData, setUserData] = useState<any>({})
  const [isLoading, setIsLoading] = useState(false)

  const getResult = async () => {
    try {
      setIsLoading(true)
      const response = await axios.get(BASE_URL)
      const data = await response?.data?.data
      const userData = await data.find(
        (item: any) => item?.Username === searchParams.get("nis")
      )
      setUserData(userData)
    } catch (error) {
      console.error(error)
      setIsLoading(false)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getResult()
  }, [searchParams])

  return (
    <AppLayout>
      <Flex
        vertical
        align="center"
        justify="center"
        gap={16}
        className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-10/12 md:w-6/12 py-8 px-4 "
      >
        {isLoading && (
          <Spin
            indicator={
              <LoadingOutlined
                style={{ fontSize: 48 }}
                spin
                className="fill-primary"
              />
            }
          />
        )}
        {!isLoading && (
          <>
            <Flex vertical align="center" justify="center" gap={4}>
              <h1 className="text-center text-2xl font-bold">
                {userData?.Nama}
              </h1>
              <p className="text-center text-sm font-bold text-primary">
                NIS. {userData?.NIS}
              </p>
              <p className="text-center text-sm font-bold text-primary">
                {userData?.Kelas}
              </p>
            </Flex>
            <Flex vertical align="center" justify="center" gap={4}>
              <p id="resultTitle" className="text-center text-sm font-bold">
                Hasil Kelulusan
              </p>
              <h2 className="text-center text-3xl text-green-600 font-bold">
                {userData?.Hasil}
              </h2>
            </Flex>
            <button
              type="button"
              className="border border-primary bg-transparent rounded px-4 py-1 text-xs text-primary"
            >
              Download SKL
            </button>
          </>
        )}
      </Flex>
    </AppLayout>
  )
}
