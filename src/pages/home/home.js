import { useState } from "react"
import Label from "../../components/label/label"
import Modal from "../../components/modal/modal"
import Navigation from "../../components/navigation/navigation"
import Contents from "./contents"

export default function Home() {
    const [modalVisible,setModalVisible] = useState(false)
    return (
        <div class="container">
            <Navigation setModalVisible={setModalVisible}/>
            <Label/>
            <Contents/>
            <Modal modalVisible={modalVisible} setModalVisible={setModalVisible}/>
        </div>
    )
}