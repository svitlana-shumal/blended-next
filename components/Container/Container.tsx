import styled from './Container.module.css';

interface ContainerProp {
  children: React.ReactNode;
}
export default function Container({ children }: ContainerProp) {
  return <div className={styled.container}>{children}</div>;
}
