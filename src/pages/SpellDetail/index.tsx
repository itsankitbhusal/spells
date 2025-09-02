import { useParams } from "react-router";
import { useGetSpell } from "../../api/hooks/useSpell";
import ClassCapsule from "./components/ClassCapsule";
import SpellDetailRow from "./components/SpellDetailRow";
import logger from "../../utils/logger";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const SpellDetail = () => {
  const { index } = useParams();
  const {
    data: spell,
    isLoading: loadingSpell,
    error: errorSpell,
  } = useGetSpell(index);

  logger.log(spell);

  if (loadingSpell)
    return (
      <Loading title="Loading" message="Please wait while the data is being loaded..." />
    );

  if (errorSpell || !spell)
    return (
      <Error message={errorSpell?.message} />
    );

  return (
    <div className="w-full my-4 ">
      <div className="grid gap-2 p-6 border-[1px] border-gray-200 rounded-[.8rem] bg-white py-6 px-8">
        <h1 className="text-3xl font-bold text-gray-800">{spell.name}</h1>
        <SpellDetailRow label="Level" value={spell.level.toString()} />

        <SpellDetailRow label="Classes">
          {spell.classes &&
            spell.classes.length > 0 &&
            spell.classes.map((spellClass) => (
              <ClassCapsule name={spellClass.name} />
            ))}
        </SpellDetailRow>

        <SpellDetailRow label="Casting Time" value={spell.casting_time} />
        <SpellDetailRow label="Range" value={spell.range} />
        <SpellDetailRow label="Duration" value={spell.duration} />

        {spell.desc ? (
          <SpellDetailRow label="Description">
            <div className="">
              {spell.desc.map((line: string, i: number) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </SpellDetailRow>
        ) : null}

        {spell.higher_level && spell.higher_level.length > 0 && (
          <SpellDetailRow
            label="Higher Level"
            value={spell.higher_level.join(", ")}
          />
        )}
      </div>
    </div>
  );
};

export default SpellDetail;
