/**
 * Can either be one element or many, the downside is it's extra computation and only really useful if we wanted to ensapulate the same display type for an entire page, but display types seem relevant to particular elements, not pages
 * @example
 * 
 * <DisplayOne>
 *  <h1>Some heading with 'displayOne' className</h1>
 *  <p>
 *  
 * */  
export const DisplayOne = ({ children }) => {
    return (
        React.Children.map(children, (child) => {
            if (React.isValidElement(child))
                return React.cloneElement(child, { className: `${'displayOne'} ${child.props.className}`});
            return child;
        })
    )
}


/**
 * Can just embed the displayType styles class into elements, the downside is that we need to create every possible element of display type that may occur
 * @example
 * 
 * <h1d1>Something here...</h1d1> <!-- Will contain the settings for displayOne for an h1 -->
 */
import styled from 'styled-components';

const h1d1 = styled.h1`
    font-size: 2rem;
    font-family: domo arigato
`

const h2d2 = {}

const displayApi = {
    h1d1,
    h2d2
}

export default displayApi;
