import { Vue } from 'vue-property-decorator';

export default class Home extends Vue {
  private colors;

  private errorMessageToShow;

  onAppPaste(pastedContent: ClipboardEvent): void;

  findColors(pastedText: string): string;

  readonly showInitialInfo: boolean;
}
