import React, { useState, useEffect, ReactElement } from "react";
import { Button } from "antd";
import Link from "next/link";
import { BankOutlined, LoadingOutlined } from "@ant-design/icons";
import { Card } from "../../styles/StyledComponents.styles";

const CreateAccount = (): ReactElement => {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(false);
  }, []);

  const handleGenerate = () => {
    setLoading(true);
  };

  return (
    <Card>
      <h2 style={{ textAlign: "center" }}>
        Create
      </h2>

      <div className={"buttons"}>
        {!loading && (
          <Link href={`/generate`} passHref>
            <Button style={{ borderColor: "#fff" }} onClick={handleGenerate}>
              New Wallet
            </Button>
          </Link>
        )}
        {loading && (
          <Button className={"disabledButton"} disabled>
            <LoadingOutlined spin />
          </Button>
        )}
      </div>
    </Card>
  );
};

export default CreateAccount;
