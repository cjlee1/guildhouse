import React from 'react';

const AbilityModal = ({abilityData}) => {
    const abilityName = abilityData.name;
    const abilityTree = abilityData.tree;
    const abilityTier = abilityData.tier;
    const abilityAP = abilityData.ap;
    const abilityLoadout = abilityData.requirements;
    const abilityAction = abilityData.action_type;
    const abilityFrequency = abilityData.frequency;
    const abilityTrigger = abilityData.trigger;
    const abilityEffect = abilityData.effect;
    const abilityTarget = abilityData.target;
    const abilityRange = abilityData.range;
    const abilityShape = abilityData.shape;
    const abilityAttack = abilityData.attack;
    const abilityHit = abilityData.hit;
    const abilityMiss = abilityData.miss;
    const abilityDescription = abilityData.description;

    // name, tree, tier, ap, loadout, activity, frequency
    // trigger, effect, target, range, shape, attack, hit, miss, description
    return(
        <div>
            {abilityName ? (<p>Name: {abilityName} </p>) : null}
            {abilityTree ? <p>Tree: {abilityTree}</p> : null}
            {abilityTier ? <p>Tier: {abilityTier}</p> : null}
            {abilityAP ? <p>AP: {abilityAP}</p> : null}
            {abilityLoadout ? <p>Loadout Required: {abilityLoadout}</p> : null}
            {abilityAction ? <p>Activity: {abilityAction}</p> : null}
            {abilityFrequency ? <p>Frequency: {abilityFrequency}</p> : null}
            {abilityTrigger ? <p>Trigger: {abilityTrigger}</p> : null}
            {abilityEffect ? <p>Effect: {abilityEffect}</p> : null}
            {abilityTarget ? <p>Target: {abilityTarget}</p> : null}
            {abilityRange ? <p>Range: {abilityRange}</p> : null}
            {abilityShape ? <p>Shape: {abilityShape}</p> : null}
            {abilityAttack ? <p>Attack: {abilityAttack}</p> : null}
            {abilityHit ? <p>Hit: {abilityHit}</p> : null}
            {abilityMiss ? <p>Miss: {abilityMiss}</p> : null}
            {abilityDescription ? <p>Description: {abilityDescription}</p> : null}
        </div>
    )
}

export default AbilityModal;