import styled from 'styled-components';

export const Title = styled.p`
    font-size: 24px;
    color: #e5e5e5;
    font-weight: bold;
    margin-left: 56px;
    margin-right: 56px;
    margin-top: 0;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    box-sizing: border-box;

> ${Title} {
    @media (max-width: 1000px) {
        margin-left: 30px;
    }
}
`;

export const Group = styled.div``;

export const SubTitle = styled.p``;

export const Text = styled.p``;

export const Entities = styled.div``;

export const Meta = styled.div``;

export const Image = styled.img``;

export const Item = styled.div``;

export const FeatureText = styled.p``;

export const Feature = styled.div``;

export const FeatureTitle = styled(Title)``;

export const FeatureClose = styled.button``;

export const Content = styled.div``;

export const Maturity = styled.p``;
