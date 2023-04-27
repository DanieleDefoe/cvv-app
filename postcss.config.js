import autoprefixer from 'autoprefixer'
import cssnanoPlugin from 'cssnano'

export default {
  plugins: [autoprefixer, cssnanoPlugin({ preset: 'default' })],

  tailwindcss: {},
  autoprefixer: {},
  ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),

  purge: ['./src/**/*.jsx'],
}
