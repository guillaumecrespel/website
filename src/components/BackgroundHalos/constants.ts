const HALO_SIZE_RELATIVE_TO_SCREEN = 25;
const HALO_SIZE_EM = 20;

export const HALO_POSITIONS: Record<string, React.CSSProperties> = {
  middleLeft: {
    transformOrigin: 'center',
    top: `calc(17% - min(-${HALO_SIZE_EM / 2}em, -${HALO_SIZE_RELATIVE_TO_SCREEN / 2}vh))`,
    left: `min(-${HALO_SIZE_EM / 2}em, -${HALO_SIZE_RELATIVE_TO_SCREEN / 2}vw)`,
    width: `max(${HALO_SIZE_EM}em, ${HALO_SIZE_RELATIVE_TO_SCREEN}vw)`,
    height: `max(${HALO_SIZE_EM}em, ${HALO_SIZE_RELATIVE_TO_SCREEN}vh)`,
  },
  topRight: {
    transformOrigin: 'center',
    top: `min(-${HALO_SIZE_EM / 2}em, -${HALO_SIZE_RELATIVE_TO_SCREEN / 2}vh)`,
    right: `min(-${HALO_SIZE_EM / 2}em, -${HALO_SIZE_RELATIVE_TO_SCREEN / 2}vw)`,
    width: `max(${HALO_SIZE_EM}em, ${HALO_SIZE_RELATIVE_TO_SCREEN}vw)`,
    height: `max(${HALO_SIZE_EM}em, ${HALO_SIZE_RELATIVE_TO_SCREEN}vh)`,
  },
  bottomRight: {
    transformOrigin: 'center',
    bottom: `min(-${HALO_SIZE_EM / 2}em, -${HALO_SIZE_RELATIVE_TO_SCREEN / 2}vh)`,
    right: `min(-${HALO_SIZE_EM / 2}em, -${HALO_SIZE_RELATIVE_TO_SCREEN / 2}vw)`,
    width: `max(${HALO_SIZE_EM}em, ${HALO_SIZE_RELATIVE_TO_SCREEN}vw)`,
    height: `max(${HALO_SIZE_EM}em, ${HALO_SIZE_RELATIVE_TO_SCREEN}vh)`,
  },
};
