import bitcoinIcon from './assets/vendor-bitcoin.svg';
import blockchainIcon from './assets/vendor-blockchain.svg'
import evilIcon from './assets/vendor-evil.svg';
import ninjaIcon from './assets/vendor-ninja.svg';
import chipLight from './assets/chip-light.svg';
import chipDark from './assets/chip-dark.svg';

const vendorData = [
  {
    cardNumber: '',
    cardholderName: '',
    validThru: '',
    ccv: '',
    vendor: '',
    icon: '',
    chip: '',
    backgroundColor: '',
    color: '',
  },
  {
    vendor: 'Bitcoin Inc',
    icon: bitcoinIcon,
    chip: chipDark,
    backgroundColor: '#FFAE34',
    color: '#000',
  },
  {
    vendor: 'Block Chain Inc',
    icon: blockchainIcon,
    chip: chipLight,
    backgroundColor: '#8B58F9',
    color: '#000',
  },
  {
    vendor: 'Evil Corp',
    icon: evilIcon,
    chip: chipLight,
    backgroundColor: '#F33355',
    color: '#000',
  },
  {
    vendor: 'Ninja Bank',
    icon: ninjaIcon,
    chip: chipLight,
    backgroundColor: '#222222',
    color: '#fff',
  },
];

export default vendorData;