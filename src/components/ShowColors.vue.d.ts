import { Vue } from 'vue-property-decorator';

export default class ShowColors extends Vue {
  readonly colors: string[];

  readonly numberOfColumns: number;

  copyToClipboard(color: string): void;
}
