import React from "react";
import Card from "./Card";
import Button from "./Button";
import style from "./ErrorModal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={style.backdrop} onClick={props.onClick}></div>;
};

const ModalOverlay = (props) => {
  return (
    <Card className={style.modal}>
      <header className={style.header}>
        <h2>{props.title}</h2>
      </header>
      <div className="content">
        <p>{props.message}</p>
      </div>
      <footer className={style.actions}>
        <Button onClick={props.close}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.close} />,
        document.getElementById("backdroop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay title={props.title} message={props.message} close={props.close}/>,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
