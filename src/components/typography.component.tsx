import styled from '@emotion/styled'

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 400;
  color: ${(p) => p.theme.colors.identifier};
`
export const SubTitle = styled.h2`
  font-size: 28px;
  font-weight: 400;
  color: ${(p) => p.theme.colors.declaration};
  margin: 0 0 20px 0;
`
export const Constant = styled.span`
  color: ${(p) => p.theme.colors.constant};
`
export const StringValue = styled.span`
  color: ${(p) => p.theme.colors.string};
`
export const NumberValue = styled.span`
  color: ${(p) => p.theme.colors.number};
`
export const Keyword = styled.span`
  color: ${(p) => p.theme.colors.keyword};
`
export const Declaration = styled.span`
  color: ${(p) => p.theme.colors.declaration};
`
