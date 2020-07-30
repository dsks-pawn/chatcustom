import React from 'react';
import CallingModal from './CallingModal';
import ContactingModal from './ContactingModal';
import CallCanceledModal from './CallCanceledModal';
import StreamModal from './StreamModal';
import 'webrtc-adapter';

function CallPage() {
	return (
		<>
			<StreamModal />
			<ContactingModal />
			<CallingModal />
			<CallCanceledModal />
		</>
	);
}

export default CallPage;
