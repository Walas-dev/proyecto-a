export const handleSmoothScroll = (
  e: React.MouseEvent<HTMLElement>, 
  url: string, 
  onComplete?: () => void
) => {
  if (url.startsWith('#')) {
    e.preventDefault(); 
    
    const targetId = url.substring(1);
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', url);
    }
  }
  
  if (onComplete) {
    onComplete();
  }
};