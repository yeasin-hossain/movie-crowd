interface ThemeProps {
  isDarkMode: boolean;
}

export const colors = {
  primary: '#afc6c3',
  primary_light: '#cee3e1',
  background: '#F8FAFC',
  background_white: '#FFFFFF',
  transparent: 'transparent',
  text: {
    blueGray: '#64748B',
    light: '#FFFFFF',
  },
  blueGray: (shade: number) => {
    switch (shade) {
      case 0:
        return '#F8FAFC';
      case 100:
        return '#F1F5F9';
      case 200:
        return '#E2E8F0';
      case 300:
        return '#CBD5E1';
      case 400:
        return '#94A3B8';
      case 500:
        return '#64748B';
      case 600:
        return '#475569';
      case 700:
        return '#334155';
      case 800:
        return '#1E293B';
      case 900:
        return '#0F172A';
      default:
        return '#334155';
    }
  },
  error: (shade: number) => {
    switch (shade) {
      case 50:
        return '#FEF2F2';
      case 100:
        return '#FEE2E2';
      case 200:
        return '#FECACA';
      case 300:
        return '#FCA5A5';
      case 400:
        return '#F87171';
      case 500:
        return '#Ef4444';
      case 600:
        return '#DC2626';
      case 700:
        return '#B91C1C';
      case 800:
        return '#991B1B';
      case 900:
        return '#7F1D1D';
      default:
        return '#DC2626';
    }
  },
};

export const HORIZONTAL_SPACE = 16;
export const VERTICAL_SPACE = 16;

export function Theme(props: ThemeProps) {
  const {isDarkMode} = props;
  return {
    background: isDarkMode ? colors.background : colors.background,
    border: isDarkMode ? colors.blueGray(400) : colors.blueGray(400),
    primary: isDarkMode ? colors.primary : colors.primary,
    notification: isDarkMode ? colors.primary : colors.primary,
    text: isDarkMode ? '#ffffff' : '#ffffff',
    card: isDarkMode ? '#ffffff' : '#ffffff',
  };
}
