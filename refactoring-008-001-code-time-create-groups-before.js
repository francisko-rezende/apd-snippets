async function createGroups(membersIdVar, membershipType) {
    const membersObject = Members.findOne({ _id: membersIdVar });

    if (!membershipType) {
        membershipType = _findMembershipType(membersIdVar);
    }

    const membersArray = Object.entries(membersObject).map(
        ([_, member]) => member
    );

    const memberGroup = {
        [membershipType]: membersArray,
    };

    return memberGroup;
}

function _findMembershipType(membersIdVar) {
    const membershipsObject = Memberships.findOne({
        members_id: membersIdVar,
        groups_id: { $ne: null },
    });

    return membershipsObject?.membershipType || null;
}

const main = () => {
    createGroups(["123", "456"]);
    createGroups(["123", "456"], "ADMIN");
};

main();
