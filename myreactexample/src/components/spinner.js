import Container from 'react-bootstrap/esm/Container';
import image from '../assets/spinner.gif'
import '../index.css';

const Spinner = () => {
    return (
        <Container>
            <div className="text-center">
                <img src={image} width={30} height={30} alt=""></img>
            </div>
        </Container>
    )
}


export default Spinner