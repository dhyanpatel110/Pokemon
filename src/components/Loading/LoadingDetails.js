import React from "react";
// ** Css
import Colors from "../../styles/Colors";
import "./styles.css";
// ** Skeleton
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
// ** React bootstrap
import { Row, Col } from "react-bootstrap";

const LoadingDetails = () => {
  return (
    <Row>
      <Col xs={12} md={6}>
        <div className="loading-item  mb-3 p-3">
          <SkeletonTheme color={Colors.brand_dark} highlightColor="#444">
            <Skeleton height={340} />
          </SkeletonTheme>
        </div>
      </Col>

      <Col xs={12} md={6}>
        <div style={{ height: 120 }} className="loading-item  mb-3 p-3">
          <SkeletonTheme color={Colors.brand_dark} highlightColor="#444">
            <Skeleton height={82} />
          </SkeletonTheme>
        </div>

        <div style={{ height: 214 }} className="loading-item mb-3 p-3">
          <SkeletonTheme color={Colors.brand_dark} highlightColor="#444">
            <Skeleton height={175} />
          </SkeletonTheme>
        </div>
      </Col>

      <Col xs={12}>
        <div style={{ height: 290 }} className="loading-item mb-3 p-3">
          <SkeletonTheme color={Colors.brand_dark} highlightColor="#444">
            <Skeleton height={250} />
          </SkeletonTheme>
        </div>
      </Col>

      <Col xs={12}>
        <div style={{ height: 290 }} className="loading-item mb-3 p-3">
          <SkeletonTheme color={Colors.brand_dark} highlightColor="#444">
            <Skeleton height={250} />
          </SkeletonTheme>
        </div>
      </Col>
    </Row>
  );
};

export default LoadingDetails;
