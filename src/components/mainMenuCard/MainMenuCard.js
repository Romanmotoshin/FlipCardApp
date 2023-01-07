import { useEffect, useState } from "react";


const MainMenuCard = ({id}) => {

    const [turn, setTurn] = useState(1)
    const [event, setEvent] = useState(false)
    const [clazz, setClazz] = useState({clazzFront: null, clazzBack: null})

    useEffect(() => {

        setTimeout(() => {
            setClazz(({
                clazzFront: {
                    'transform': 'rotateY(0.5turn)',
                    'transition': `transform 4s cubic-bezier(0.23, 3, 0.2, -0.3)`,
                },
                clazzBack: {
                    'transform': 'rotateY(0turn)',
                    'transition': `transform 4s cubic-bezier(0.23, 3, 0.2, -0.3)`,
                }
            }))
        }, id * 200)

        setTimeout(() => {
            setClazz(({
                clazzFront: {
                    'transform': 'rotateY(0turn)',
                    'transition': `transform 4s cubic-bezier(0.23, 3, 0.2, -0.3)`,
                },
                clazzBack: {
                    'transform': 'rotateY(-0.5turn)',
                    'transition': `transform 4s cubic-bezier(0.23, 3, 0.2, -0.3)`,
                }
            }))
            setTimeout(() => {
                setEvent(true)
            }, 4000)
        }, 8200 + (21 - id) * 100)
    }, [])

    useEffect(() => {
        setEvent(true)
    }, [turn])

    const onHover = () => {
        if (event) {
            setClazz(({
                clazzFront: {
                    'transform': `rotateY(0.5turn)`,
                    'transition': `transform 1s linear`,
                },
                clazzBack: {
                    'transform': `rotateY(0turn)`,
                    'transition': `transform 1s linear`,
                }
            }))
        }
    }

    const onLeave = () => {
        if (event) {
            setClazz(({
                clazzFront: {
                    'transform': 'rotateY(0turn)',
                    'transition': `transform 1s linear`,
                },
                clazzBack: {
                    'transform': 'rotateY(-0.5turn)',
                    'transition': `transform 1s linear`,
                }
            }))
            setTurn(1)
        }
    }

    const onFaster = () => {
        setEvent(false)
        if (event) {
            setClazz(({
                clazzFront: {
                    'transform': `rotateY(${turn}turn)`,
                    'transition': `transform 0.2s linear`,
                },
                clazzBack: {
                    'transform': `rotateY(${turn - 0.5}turn)`,
                    'transition': `transform 0.2s linear`,
                }
            }))
            setTimeout(() => {
                setTurn(turn => turn + 0.5)
            }, 200)
            
        }
    }

    return ( 
        <div className="main-menu__item" onMouseEnter={() => onHover()} onMouseLeave={() => onLeave()} onClick={() => onFaster()}>
            <div className="main-menu__item_front"  style={clazz.clazzFront}></div>
            <div className="main-menu__item_back" style={clazz.clazzBack}></div>
        </div> 
    );
};

export default MainMenuCard;