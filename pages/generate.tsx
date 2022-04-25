import React, { useState } from "react";
import { NextPage } from "next";
import { Button } from "antd";
import Link from "next/link";
import { LoadingOutlined } from "@ant-design/icons";

const Phrase: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleLoading = () => {
    setLoading(true)
  };

  return (
    <>
      <h1 className={`title`}>Creating a new wallet</h1>

      {!loading && (
        <Link href={`/phrase`} passHref>
          <Button type="default" onClick={handleLoading}>
            Create
          </Button>
        </Link>
      )}

      {loading && <LoadingOutlined style={{ fontSize: 24 }} spin />}
    </>
  );
};

export default Phrase;
