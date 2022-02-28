import { Vue } from 'vue-property-decorator';

export default class ColorsForm extends Vue {
  private errorMessageToShow: string;

  private samplePalette: string;

  private pastedInfo: string;

  formSubmit(): void;

  findColors(pastedText: string): string;
}
