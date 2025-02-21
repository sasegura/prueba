import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { SubscribeFormData } from "@/data";
import { sendEmailSubscription } from "../connection/Api";
import { useForm } from "react-hook-form";
import TagManager from "react-gtm-module";

const SubscribeForm = () => {
  const { sectionContent } = SubscribeFormData;
  const [subscription, setSubscription] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    try {
      TagManager.dataLayer({ dataLayer: { event: "suscribeEvent" } });
      setSubscription(true);
      await sendEmailSubscription({ payload: data });
      reset();
    } catch (e) {
      console.log(e.message);
      reset();
    }
  };

  return (
    <section className="commonSection subscribe">
      <Container>
        <Row>
          {subscription && (
            <Col lg={12}>
              <h4 className="sub_title">{sectionContent.subTitleSUb}</h4>
              <h2 style={{ marginLeft: 20 }} className="sec_title">
                {sectionContent.titleSub}
                <span style={{ width: "25px", display: "inline-block" }} />
                <i
                  className="fa fa-refresh"
                  style={{ fontSize: "1.5rem", cursor: "pointer" }}
                  onClick={() => setSubscription(false)}
                />
              </h2>
            </Col>
          )}
          {!subscription && (
            <>
              <Col lg={4}>
                <h4 className="sub_title">{sectionContent.subTitle}</h4>
                <h2 className="sec_title">{sectionContent.title}</h2>
              </Col>
              <Col lg={8}>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="subscribefrom"
                  id="subscribeFormId"
                >
                  <input
                    type="email"
                    id="subscribeEmailId"
                    placeholder="Introduce tu email"
                    {...register("email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                  />
                  <button
                    className="common_btn red_bg"
                    id="subscribeButtonId"
                    type="submit"
                    name="submit"
                  >
                    <span>Suscríbete ahora</span>
                  </button>
                  {!!errors?.email ? (
                    <p
                      style={{
                        color: "red",
                        textAlign: "left",
                        padding: "0.5rem 0 0 4rem",
                      }}
                    >
                      Por favor introduzca un email válido.
                    </p>
                  ) : null}
                </form>
              </Col>
            </>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default SubscribeForm;
