import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0); // 스크롤을 (0, 0) 좌표로 이동하여 초기화
  }, [pathname]);

  return null;
};

export default ScrollToTop;