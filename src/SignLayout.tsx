import { Outlet } from 'react-router-dom';
import { Col, Row } from './ui/components/layout/Stack';

const SignLayout = () => {
    return (
        <>
            <Row style={{ height: '100vh' }}>
                <Col spacing={1}
                    flex={2}
                    sx={{
                        height: '100%',
                        backgroundImage: `url('home.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}></Col>
                <Col
                    sx={{
                        height: '100%',
                        width: '488px',
                        alignItems: 'center',
                    }}
                >
                    <Outlet />
                    <footer style={{ textAlign: 'center', backgroundColor: '#C9C9C9', width: '100%', height: '70px', alignContent: 'center' }}>
                        <img src="byWBuildFooter.png" alt="Footer Logo" style={{ maxWidth: '100px' }} />
                    </footer>
                </Col>

            </Row>
        </>
    )
}

export default SignLayout