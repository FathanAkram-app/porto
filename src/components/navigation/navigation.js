import './style.css'


export default function Navigation(props) {
    return (
        <ul class="navigator"
        style={{
            backgroundColor:"#0099ff"
        }}>
            <li><a class="navigator-item" >Home</a></li>
            <li><a class="navigator-item" >News</a></li>
            <li><a class="navigator-item" onClick={()=>props.setModalVisible(true)}>Contact</a></li>
            <li><a class="navigator-item" >About</a></li>
        </ul>

        
    );
}