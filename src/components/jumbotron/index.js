import React from "react";
import { Item, Inner, Container } from './styles/jumbotron'

// Pass & destructure component children, direction for reusability/flexibility
// Also use spread operator to allow developer to use API as they see fit
// Spread operator will capture any additional components
export default function Jumbotron({ children, direction = 'row', ...restProps }) {
    return (
        <Item {...restProps}>
            <Inner direction={direction}>{children}</Inner> {/* Where Image & Text will go */}
        </Item>
    )
}

// Key to Compound Components Design Pattern
Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}