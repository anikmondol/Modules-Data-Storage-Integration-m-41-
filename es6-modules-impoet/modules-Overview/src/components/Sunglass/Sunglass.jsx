
import './Sunglass.css'
import Watch from '../Watch/Watch'
import { add, devie, multply } from '../../Utils/calculate';



const Sunglass = () => {
    const first = 55;
    const second = 155;
    const sum = add(first, second);
    const mutl = multply(first, second);
    const dive = devie(first, second)


    return (
        <div>
            {/* <Watch></Watch> */}
        </div>
    );
};

export default Sunglass;