async function createGroups(membersIdVar, membershipTypeOrNull) {
        const membersObject = Members.findOne({ _id: membersIdVar });

        const membershipType = _findOrGetMembershipType({
            membersId: membersIdVar,
            membershipType: membershipTypeOrNull,
        });

        // do stuff to create group and return response
        return {};
}

function _findOrGetMembershipType({ membersId, membershipType }) {
    if (membershipType) {
        return membershipType;
    }
    const membershipsObject = Memberships.findOne({
        members_id: membersId,
        groups_id: { $ne: null },
    });

    return membershipsObject && membershipsObject.membership_type
        ? membershipsObject.membership_type
        : null;
}

const main = () => {
    createGroups([ '123', '456'])
    createGroups([ '123', '456'], 'ADMIN')
}

main();
