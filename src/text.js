const [ currentTime, setCurrentTime ] = useState(new Date())
const timeCursor = useRef()
    const test = useRef('<div><TimeCursor /></div>')

    const reducer = (state, action) => {
        return {time: state.time + 1}
    }
    const [ state, dispatch ] = useReducer(reducer, {time: 0})
    
    useEffect(() => {
        setTimeout(() => {
            dispatch()
            const currentScheduleBox = document.getElementById("t7")
            console.log(test.current)


            // timeCursor.current.style.top = `${currentScheduleBox.top}px`
            // timeCursor.current.style.left = `${currentScheduleBox.left}px`
            // timeCursor.current.style = `transform: translate(${state.time}px, 0px);`
        }, 1000)
    }, [])
    // state.time