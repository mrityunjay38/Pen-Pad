import React from 'react';
import { Row, Col } from '../Layouts';
import { ReactComponent as VerticalView } from '../../assets/img/vertical-page-view.svg';
import './index.css';

const StatusBar = () => {
    return (
        <Row className="status-bar">
            <Col className="view-type" align="flex-start">
                <span className="center">
                    <VerticalView />
                </span>
            </Col>
            <Col></Col>
        </Row>
    )
}

export default StatusBar;