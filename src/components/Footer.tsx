import styled from '@emotion/styled'
import React from 'react'

const Base = styled.footer`
    display: block;
    box-sizing: border-box;
    width: 100%;
`;

const Section = styled.section`
    background-color: #1c1d1f;
`;

const Statistics = styled.section`
    background-color: #101113;
    width: 100%;
    height: 62px;
    line-height: 62px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Summery = styled.span`
    color: #d1d1d2;
    font-size: 19px;
    font-weight: 500;
    line-height: 12px;
    text-align: center;
`;

const Emphasis = styled.em`
    color:#ff0558;
    font-size: 19px;
    font-weight: 500;
    line-height: 12px;
    text-align: center;
`;

const Container = styled.section`
    background-color: #1d1e1f;
    padding: 20px 0 38px;
`;

const ContentWrapper = styled.div`
    display: flex;
    margin:  0 60px;
`;

const Left = styled.div``;

const Right = styled.div``;

const TermAndPolicy = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

const TermAndPolicyItem = styled.li`
    display: inline-block;
    color: #a5a5a7;
    font-size: 13px;
    font-weight: 400;
    line-height: 22px;
    vertical-align: top;
    cursor: pointer;
    &:not(:last-child){
        &:after{
            content: "";
            display: inline-block;
            background-color: #848485;
            vertical-align: top;
            width: 1px;
            height: 12px;
            margin:  5px 8px 0;
        }
    }
`;


const Footer = () => {
    return(
        <Base>
            <Section>
                <Statistics>
                <Summery>
                    지금까지&nbsp;
                    <Emphasis>★ 661,566,845 개의 평가가</Emphasis>
                    &nbsp;쌓였어요.
                </Summery>
                </Statistics>
                <Container>
                    <ContentWrapper>
                        <Left>
                            <TermAndPolicy>
                                <TermAndPolicyItem>서비스 이용약관</TermAndPolicyItem>
                                <TermAndPolicyItem>개인정보 처리방침</TermAndPolicyItem>
                                <TermAndPolicyItem>회사 정보</TermAndPolicyItem>
                            </TermAndPolicy>
                        </Left>
                        <Right/>
                    </ContentWrapper>
                </Container>
            </Section>
        </Base>
    )
}

export default Footer