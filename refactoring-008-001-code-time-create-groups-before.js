async function createGroups(membersIdVar, membershipType) {

    const membersObject = Members.findOne({ _id: membersIdVar });

    if (!membershipType) {
        membershipType = _findMembershipType(membersIdVar);
    }

    // do stuff to create group and return response
    return {};
}

function _findMembershipType(membersIdVar) {
    const membershipsObject = Memberships.findOne({
        members_id: membersIdVar,
        groups_id: { $ne: null },
    });
    return membershipsObject && membershipsObject.membership_type
        ? membershipsObject.membership_type
        : null;
}

const main = () => {
    createGroups(['123', '456'])
    createGroups(['123', '456'], 'ADMIN')
}

main();
