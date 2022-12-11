
import './style.css'
export default function Modal(props) {
    
    return (
        <div style={{
            display: props.modalVisible ? "flex" : "none"
        }} class="background-modal">
            <div class='container-modal'>
                <a>Contact me 📞</a>
                <br/>
                <br/>
                <a>📧 Email: <a>fathan.a.dev@gmail.com</a></a>
                <br/>
                <a>📱 Instagram: <a>@fthn.exe</a></a>
                <br/>
                <div class="modal-close-btn" onClick={(e)=>props.setModalVisible(false)}>Close</div>
            </div>
        </div>
        
    )
    
}

