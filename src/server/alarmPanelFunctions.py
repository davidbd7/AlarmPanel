import yaml
import argparse
import sys

def updateCode(new_code):
    config_file = "/etc/homeassistant/config/configuration.yaml"
    with open(config_file) as f:
        doc = yaml.safe_load(f)

    print(type(doc))
    print(doc)
    print('\n\n')

    # Load property to be edited and change value
    doc['alarm_control_panel'][0]['code'] = new_code

    print(doc.get('alarm_control_panel'))
    
    with open(config_file, 'w') as f:
        yaml.safe_dump(doc, f)


def updateArmTime(arming_time):
    config_file = "/etc/homeassistant/config/configuration.yaml"
    with open(config_file) as f:
        doc = yaml.safe_load(f)

    print(type(doc))
    print(doc)
    print('\n\n')

    # Load property to be edited and change value
    doc['alarm_control_panel'][0]['arming_time'] = arming_time
    print(doc.get('alarm_control_panel'))

    with open(config_file, 'w') as f:
        yaml.safe_dump(doc, f)

def updateDelayTime(delay_time):
    config_file = "/etc/homeassistant/config/configuration.yaml"
    with open(config_file) as f:
        doc = yaml.safe_load(f)

    print(type(doc))
    print(doc)
    print('\n\n')

    # Load property to be edited and change value
    doc['alarm_control_panel'][0]['delay_time'] = delay_time
    print(doc.get('alarm_control_panel'))

    with open(config_file, 'w') as f:
        yaml.safe_dump(doc, f)

def updateDelayTimeHome(delay_time):
    config_file = "/etc/homeassistant/config/configuration.yaml"
    with open(config_file) as f:
        doc = yaml.safe_load(f)

    print(type(doc))
    print(doc)
    print('\n\n')

    # Load property to be edited and change value
    doc['alarm_control_panel'][0]['armed_home']['delay_time'] = delay_time
    print(doc.get('alarm_control_panel'))

    with open(config_file, 'w') as f:
        yaml.safe_dump(doc, f)

def updateArmTimeHome(arming_time):
    config_file = "/etc/homeassistant/config/configuration.yaml"
    with open(config_file) as f:
        doc = yaml.safe_load(f)

    print(type(doc))
    print(doc)
    print('\n\n')

    # Load property to be edited and change value
    doc['alarm_control_panel'][0]['armed_home']['arming_time'] = arming_time
    print(doc.get('alarm_control_panel'))

    with open(config_file, 'w') as f:
        yaml.safe_dump(doc, f)

def updateTriggerTime(trigger_time):
    config_file = "/etc/homeassistant/config/configuration.yaml"
    with open(config_file) as f:
        doc = yaml.safe_load(f)

    print(type(doc))
    print(doc)
    print('\n\n')

    # Load property to be edited and change value
    doc['alarm_control_panel'][0]['trigger_time'] = trigger_time
    print(doc.get('alarm_control_panel'))

    with open(config_file, 'w') as f:
        yaml.safe_dump(doc, f)

func_arg = {
	"updateCode": updateCode, 
	"updateArmTime": updateArmTime,
        "updateDelayTime": updateDelayTime, 
	"updateDelayTimeHome": updateDelayTimeHome,
	"updateArmTimeHome": updateArmTimeHome,
	"updateTriggerTime": updateTriggerTime,
	}

if __name__ == "__main__":
    func_arg[sys.argv[1]](sys.argv[2])