function showError(e) {
    console.warn("Error", e);
}

function updateUI(userWithImage) {
    let current = $('#app').html();
    current = current.concat(`<p><img src="${userWithImage.avatar}"><strong>${userWithImage.first_name}</strong></p>`);
    $("#app").html(current);
}

function getUserURL(id) {
    return `https://reqres.in/api/users/${id}`;
}

$("#btn").on("click", () => {
    $.getJSON({
        url: `https://reqres.in/api/users?page=2`,
        success: page => {
            page.data.forEach(user => {
                $.getJSON({
                    url: getUserURL(user.id),
                    success(u) {
                        updateUI(
                            u.data,
                        );
                    },
                    error: showError
                });
            });
        },
        error: showError
    });
});
