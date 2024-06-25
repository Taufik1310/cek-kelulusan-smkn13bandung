import { Button, Flex, Input } from "antd"
import AppLayout from "../layout"
import { useState } from "react"
import { createSearchParams, useNavigate } from "react-router-dom"

export default function Home() {
  const navigate = useNavigate()

  const [nis, setNis] = useState("")

  const onSubmittedForm = () => {
    if (nis) {
      return navigate({
        pathname: "result",
        search: createSearchParams({
          nis: nis,
        }).toString(),
      })
    }
    return
  }

  return (
    <AppLayout>
      <Flex
        vertical
        align="center"
        justify="center"
        gap={8}
        className="w-8/12 md:w-6/12 lg:w-4/12"
      >
        <Input
          placeholder="Masukkan NIS"
          onChange={(e) => setNis(e.target.value)}
          value={nis}
        />
        <Button
          type="primary"
          block
          className="bg-primary hover:bg-primary"
          onClick={onSubmittedForm}
        >
          Cek Kelulusan
        </Button>
      </Flex>
    </AppLayout>
  )
}
