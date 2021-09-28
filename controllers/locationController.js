class LocationController {
	index(request, response) {
		response.send(200, 'Send from Location Controller');
		// List all
	}

	show() {
		// List one
	}

	store() {
		// Create one
	}

	update() {
		// Update one
	}

	delete() {
		// List
	}
}

module.exports = new LocationController();
