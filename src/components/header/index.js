import React, { useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { 
    Background, 
    Container, 
    Logo, 
    ButtonLink, 
    Group, 
    Text, 
    Link,
    Feature,
    FeatureCallOut,
    PlayButton,
    Search,
    SearchIcon,
    SearchInput 
} from './styles/header';

export default function Header({ bg = true, children, ...restProps }) {
    return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Header.Group = function HeaderGroup({ children, ...restProps}) {
    return <Group {...restProps}>{children}</Group>;
}

Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
        <ReactRouterLink to={to}>
            <Logo {...restProps} />
        </ReactRouterLink>)
}

Header.Text = function HeaderText({ children , ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
}

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>;
}

Header.Link = function HeaderLink({ children , ...restProps }) {
    return <Link {...restProps}>{children}</Link>;
}

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps}) {
    const [searchActive, setSearchActive] = useState(false);
    return (
        <Search {...restProps}>
            <SearchIcon onClick={() => setSearchActive(!searchActive)}>
                <img src="images/icons/search.png" alt="Search" />
            </SearchIcon>
            <SearchInput
                value={searchTerm}
                onChange={({target}) => setSearchTerm(target.value)}
                placeholder="Search films and series"
                active={searchActive}
            />
        </Search>
    )
}

Header.Feature = function HeaderFeature({ children, ...props }) {
    return <Feature {...props}>{children}</Feature>;
}

Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...props }) {
    return <FeatureCallOut>{children}</FeatureCallOut>;
}

Header.PlayButton = function HeaderPlayButton({ children, ...props }) {
    return <PlayButton {...props}>{children}</PlayButton>;
}