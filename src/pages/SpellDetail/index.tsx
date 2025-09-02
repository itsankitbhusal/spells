import { useParams, Link } from "react-router";
import { useGetSpell } from "../../api/hooks/useSpell";
import ClassCapsule from "./components/ClassCapsule";
import SpellDetailRow from "./components/SpellDetailRow";
import logger from "../../utils/logger";

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
      <div className="flex justify-center items-center h-screen text-gray-600 text-lg">
        Loading spell details...
      </div>
    );

  if (errorSpell)
    return (
      <div className="flex justify-center items-center h-screen text-red-500 text-lg">
        Error: {errorSpell.message}
      </div>
    );

  if (!spell) return null;

  return (
    <div className="mx-auto my-4 px-4">
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
