import React, { useState, useEffect, ReactElement } from "react";
import { Button } from "antd";
import { LoadingOutlined, UnlockOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Card } from "../../styles/StyledComponents.styles";

const RestoreAccount = (): ReactElement => {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(false);
  }, []);

  const handleGetWallet = () => {
    setLoading(true);
  };

  return (
      <div className={"buttons"}>
        {!loading && (
          <Link href={`/recover`} passHref>
            <Button style={{ borderColor: "#fff" }} onClick={handleGetWallet}>Or load your wallet using a secret passphrase</Button>
          </Link>
        )}
        {loading && (
          <Button className={"disabledButton"} disabled>
            <LoadingOutlined spin />
          </Button>
        )}
      </div>
  );
};

export default RestoreAccount;
