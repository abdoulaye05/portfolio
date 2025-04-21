import styles from "./ModalContent.module.scss";
import works from "../datas/datas.json";
import { useParams } from "react-router-dom";


function ModalContent() {
  const { id } = useParams();

  const selectedWork = works.find((work) => work.id === id);
  
  return <>
   <h5> {selectedWork.title}</h5>
  </>;
}

export default ModalContent;
