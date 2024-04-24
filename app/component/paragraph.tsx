import { ParagraphDataType } from "../type";

export const Paragraph = ({
  paragraphData,
}: {
  paragraphData: ParagraphDataType;
}): React.ReactElement => (
  <section className="bg-[#DCCCBC] flex py-7 items-center justify-center gap-8">
    <h2
      style={{ writingMode: "vertical-rl", letterSpacing: "16px" }}
      className="font-bold text-4xl relative"
    >
      {paragraphData.title}
      {/* artistic fullstop */}
      <div className="bg-[#AA666699] rounded-full size-[25px] top-[71%] right-[-29%] absolute" />
      <div className="bg-[#DCCCBC] rounded-full size-[11px] top-[78%] right-[-12%] absolute z-3" />
    </h2>
    <p className="w-[50%]">{paragraphData.paragraph}</p>
  </section>
);
